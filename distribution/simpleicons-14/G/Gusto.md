# Gusto


```text
simpleicons-14/G/Gusto
```

```text
include('simpleicons-14/G/Gusto')
```



| Illustration | Gusto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gusto.png) | ![illustration for Gusto](../../simpleicons-14/G/Gusto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GustoXs>`
- `<$GustoSm>`
- `<$GustoMd>`
- `<$GustoLg>`





## Gusto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gusto
include('simpleicons-14/G/Gusto')

' renders the element
Gusto('Gusto', 'Gusto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gusto
include('simpleicons-14/G/Gusto')

' renders the element
Gusto('Gusto', 'Gusto', 'an optional tech label', 'an optional description')
@enduml
```

