# Stopstalk


```text
simpleicons-5/S/Stopstalk
```

```text
include('simpleicons-5/S/Stopstalk')
```



| Illustration | Stopstalk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Stopstalk.png) | ![illustration for Stopstalk](../../simpleicons-5/S/Stopstalk.Local.png) |




## Stopstalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stopstalk
include('simpleicons-5/S/Stopstalk')

' renders the element
Stopstalk('Stopstalk', 'Stopstalk', 'an optional tech label')
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

' loads the Item which embeds the element Stopstalk
include('simpleicons-5/S/Stopstalk')

' renders the element
Stopstalk('Stopstalk', 'Stopstalk', 'an optional tech label')
@enduml
```

