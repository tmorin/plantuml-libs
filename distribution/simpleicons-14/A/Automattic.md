# Automattic


```text
simpleicons-14/A/Automattic
```

```text
include('simpleicons-14/A/Automattic')
```



| Illustration | Automattic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Automattic.png) | ![illustration for Automattic](../../simpleicons-14/A/Automattic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutomatticXs>`
- `<$AutomatticSm>`
- `<$AutomatticMd>`
- `<$AutomatticLg>`





## Automattic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Automattic
include('simpleicons-14/A/Automattic')

' renders the element
Automattic('Automattic', 'Automattic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Automattic
include('simpleicons-14/A/Automattic')

' renders the element
Automattic('Automattic', 'Automattic', 'an optional tech label', 'an optional description')
@enduml
```

