# Openai


```text
simpleicons-7/O/Openai
```

```text
include('simpleicons-7/O/Openai')
```



| Illustration | Openai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openai.png) | ![illustration for Openai](../../simpleicons-7/O/Openai.Local.png) |




## Openai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openai
include('simpleicons-7/O/Openai')

' renders the element
Openai('Openai', 'Openai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openai
include('simpleicons-7/O/Openai')

' renders the element
Openai('Openai', 'Openai', 'an optional tech label', 'an optional description')
@enduml
```

