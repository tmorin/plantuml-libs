# Ollama


```text
simpleicons-14/O/Ollama
```

```text
include('simpleicons-14/O/Ollama')
```



| Illustration | Ollama |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Ollama.png) | ![illustration for Ollama](../../simpleicons-14/O/Ollama.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OllamaXs>`
- `<$OllamaSm>`
- `<$OllamaMd>`
- `<$OllamaLg>`





## Ollama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ollama
include('simpleicons-14/O/Ollama')

' renders the element
Ollama('Ollama', 'Ollama', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ollama
include('simpleicons-14/O/Ollama')

' renders the element
Ollama('Ollama', 'Ollama', 'an optional tech label', 'an optional description')
@enduml
```

