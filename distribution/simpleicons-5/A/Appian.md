# Appian


```text
simpleicons-5/A/Appian
```

```text
include('simpleicons-5/A/Appian')
```



| Illustration | Appian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Appian.png) | ![illustration for Appian](../../simpleicons-5/A/Appian.Local.png) |




## Appian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Appian
include('simpleicons-5/A/Appian')

' renders the element
Appian('Appian', 'Appian', 'an optional tech label')
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

' loads the Item which embeds the element Appian
include('simpleicons-5/A/Appian')

' renders the element
Appian('Appian', 'Appian', 'an optional tech label')
@enduml
```

