# Griddotai


```text
simpleicons-6/G/Griddotai
```

```text
include('simpleicons-6/G/Griddotai')
```



| Illustration | Griddotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Griddotai.png) | ![illustration for Griddotai](../../simpleicons-6/G/Griddotai.Local.png) |




## Griddotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Griddotai
include('simpleicons-6/G/Griddotai')

' renders the element
Griddotai('Griddotai', 'Griddotai', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Griddotai
include('simpleicons-6/G/Griddotai')

' renders the element
Griddotai('Griddotai', 'Griddotai', 'an optional tech label')
@enduml
```

