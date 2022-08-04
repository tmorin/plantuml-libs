# Griddotai


```text
simpleicons-7/G/Griddotai
```

```text
include('simpleicons-7/G/Griddotai')
```



| Illustration | Griddotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Griddotai.png) | ![illustration for Griddotai](../../simpleicons-7/G/Griddotai.Local.png) |




## Griddotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Griddotai
include('simpleicons-7/G/Griddotai')

' renders the element
Griddotai('Griddotai', 'Griddotai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Griddotai
include('simpleicons-7/G/Griddotai')

' renders the element
Griddotai('Griddotai', 'Griddotai', 'an optional tech label', 'an optional description')
@enduml
```

