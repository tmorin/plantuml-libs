# Addthis


```text
simpleicons-7/A/Addthis
```

```text
include('simpleicons-7/A/Addthis')
```



| Illustration | Addthis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Addthis.png) | ![illustration for Addthis](../../simpleicons-7/A/Addthis.Local.png) |




## Addthis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Addthis
include('simpleicons-7/A/Addthis')

' renders the element
Addthis('Addthis', 'Addthis', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Addthis
include('simpleicons-7/A/Addthis')

' renders the element
Addthis('Addthis', 'Addthis', 'an optional tech label')
@enduml
```

