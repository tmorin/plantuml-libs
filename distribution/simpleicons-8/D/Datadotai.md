# Datadotai


```text
simpleicons-8/D/Datadotai
```

```text
include('simpleicons-8/D/Datadotai')
```



| Illustration | Datadotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Datadotai.png) | ![illustration for Datadotai](../../simpleicons-8/D/Datadotai.Local.png) |




## Datadotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Datadotai
include('simpleicons-8/D/Datadotai')

' renders the element
Datadotai('Datadotai', 'Datadotai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datadotai
include('simpleicons-8/D/Datadotai')

' renders the element
Datadotai('Datadotai', 'Datadotai', 'an optional tech label', 'an optional description')
@enduml
```

