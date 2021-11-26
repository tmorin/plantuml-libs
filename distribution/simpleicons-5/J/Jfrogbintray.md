# Jfrogbintray


```text
simpleicons-5/J/Jfrogbintray
```

```text
include('simpleicons-5/J/Jfrogbintray')
```



| Illustration | Jfrogbintray |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jfrogbintray.png) | ![illustration for Jfrogbintray](../../simpleicons-5/J/Jfrogbintray.Local.png) |




## Jfrogbintray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jfrogbintray
include('simpleicons-5/J/Jfrogbintray')

' renders the element
Jfrogbintray('Jfrogbintray', 'Jfrogbintray', 'an optional tech label')
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

' loads the Item which embeds the element Jfrogbintray
include('simpleicons-5/J/Jfrogbintray')

' renders the element
Jfrogbintray('Jfrogbintray', 'Jfrogbintray', 'an optional tech label')
@enduml
```

