# Sequelize


```text
simpleicons/S/Sequelize
```

```text
include('simpleicons/S/Sequelize')
```



| Illustration | Sequelize |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sequelize.png) | ![illustration for Sequelize](../../simpleicons/S/Sequelize.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sequelize
include('simpleicons/S/Sequelize')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sequelize
include('simpleicons/S/Sequelize')

' renders the element
Sequelize('Sequelize', 'Sequelize', 'an optional tech label', 'an optional description')
@enduml
```

