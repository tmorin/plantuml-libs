# Openai


```text
simpleicons-5/O/Openai
```

```text
include('simpleicons-5/O/Openai')
```



| Illustration | Openai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openai.png) | ![illustration for Openai](../../simpleicons-5/O/Openai.Local.png) |




## Openai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openai
include('simpleicons-5/O/Openai')

' renders the element
Openai('Openai', 'Openai', 'an optional tech label')
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

' loads the Item which embeds the element Openai
include('simpleicons-5/O/Openai')

' renders the element
Openai('Openai', 'Openai', 'an optional tech label')
@enduml
```

