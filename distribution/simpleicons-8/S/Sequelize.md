# Sequelize


```text
simpleicons-8/S/Sequelize
```

```text
include('simpleicons-8/S/Sequelize')
```



| Illustration | Sequelize |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sequelize.png) | ![illustration for Sequelize](../../simpleicons-8/S/Sequelize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SequelizeXs>`
- `<$SequelizeSm>`
- `<$SequelizeMd>`
- `<$SequelizeLg>`





## Sequelize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sequelize
include('simpleicons-8/S/Sequelize')

' renders the element
Sequelize('Sequelize', 'Sequelize', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sequelize
include('simpleicons-8/S/Sequelize')

' renders the element
Sequelize('Sequelize', 'Sequelize', 'an optional tech label', 'an optional description')
@enduml
```

