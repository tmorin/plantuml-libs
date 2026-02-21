# Langchain


```text
simpleicons-14/L/Langchain
```

```text
include('simpleicons-14/L/Langchain')
```



| Illustration | Langchain |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Langchain.png) | ![illustration for Langchain](../../simpleicons-14/L/Langchain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LangchainXs>`
- `<$LangchainSm>`
- `<$LangchainMd>`
- `<$LangchainLg>`





## Langchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Langchain
include('simpleicons-14/L/Langchain')

' renders the element
Langchain('Langchain', 'Langchain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Langchain
include('simpleicons-14/L/Langchain')

' renders the element
Langchain('Langchain', 'Langchain', 'an optional tech label', 'an optional description')
@enduml
```

