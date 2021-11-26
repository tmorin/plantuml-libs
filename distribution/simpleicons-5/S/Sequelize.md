# Sequelize


```text
simpleicons-5/S/Sequelize
```

```text
include('simpleicons-5/S/Sequelize')
```



| Illustration | Sequelize |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sequelize.png) | ![illustration for Sequelize](../../simpleicons-5/S/Sequelize.Local.png) |




## Sequelize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sequelize
include('simpleicons-5/S/Sequelize')

' renders the element
Sequelize('Sequelize', 'Sequelize', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sequelize
include('simpleicons-5/S/Sequelize')

' renders the element
Sequelize('Sequelize', 'Sequelize', 'an optional tech label')
@enduml
```

