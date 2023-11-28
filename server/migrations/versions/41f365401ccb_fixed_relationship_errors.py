"""fixed relationship errors

Revision ID: 41f365401ccb
Revises: 889d0bb38e08
Create Date: 2023-11-28 16:08:31.699767

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '41f365401ccb'
down_revision = '889d0bb38e08'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movies', schema=None) as batch_op:
        batch_op.alter_column('time',
               existing_type=sa.INTEGER(),
               type_=sa.String(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movies', schema=None) as batch_op:
        batch_op.alter_column('time',
               existing_type=sa.String(),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###