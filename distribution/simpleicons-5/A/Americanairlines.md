# Americanairlines


```text
simpleicons-5/A/Americanairlines
```

```text
include('simpleicons-5/A/Americanairlines')
```



| Illustration | Americanairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Americanairlines.png) | ![illustration for Americanairlines](../../simpleicons-5/A/Americanairlines.Local.png) |




## Americanairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Americanairlines
include('simpleicons-5/A/Americanairlines')

' renders the element
Americanairlines('Americanairlines', 'Americanairlines', 'an optional tech label')
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

' loads the Item which embeds the element Americanairlines
include('simpleicons-5/A/Americanairlines')

' renders the element
Americanairlines('Americanairlines', 'Americanairlines', 'an optional tech label')
@enduml
```

