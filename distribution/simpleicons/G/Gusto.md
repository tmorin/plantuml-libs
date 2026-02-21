# Gusto


```text
simpleicons/G/Gusto
```

```text
include('simpleicons/G/Gusto')
```



| Illustration | Gusto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gusto.png) | ![illustration for Gusto](../../simpleicons/G/Gusto.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gusto
include('simpleicons/G/Gusto')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gusto
include('simpleicons/G/Gusto')

' renders the element
Gusto('Gusto', 'Gusto', 'an optional tech label', 'an optional description')
@enduml
```

