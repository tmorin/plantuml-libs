# Logmein


```text
simpleicons-5/L/Logmein
```

```text
include('simpleicons-5/L/Logmein')
```



| Illustration | Logmein |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Logmein.png) | ![illustration for Logmein](../../simpleicons-5/L/Logmein.Local.png) |




## Logmein

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Logmein
include('simpleicons-5/L/Logmein')

' renders the element
Logmein('Logmein', 'Logmein', 'an optional tech label')
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

' loads the Item which embeds the element Logmein
include('simpleicons-5/L/Logmein')

' renders the element
Logmein('Logmein', 'Logmein', 'an optional tech label')
@enduml
```

