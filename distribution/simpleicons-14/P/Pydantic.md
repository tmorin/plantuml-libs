# Pydantic


```text
simpleicons-14/P/Pydantic
```

```text
include('simpleicons-14/P/Pydantic')
```



| Illustration | Pydantic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pydantic.png) | ![illustration for Pydantic](../../simpleicons-14/P/Pydantic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PydanticXs>`
- `<$PydanticSm>`
- `<$PydanticMd>`
- `<$PydanticLg>`





## Pydantic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pydantic
include('simpleicons-14/P/Pydantic')

' renders the element
Pydantic('Pydantic', 'Pydantic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pydantic
include('simpleicons-14/P/Pydantic')

' renders the element
Pydantic('Pydantic', 'Pydantic', 'an optional tech label', 'an optional description')
@enduml
```

