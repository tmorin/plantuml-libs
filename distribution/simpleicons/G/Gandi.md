# Gandi


```text
simpleicons/G/Gandi
```

```text
include('simpleicons/G/Gandi')
```



| Illustration | Gandi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gandi.png) | ![illustration for Gandi](../../simpleicons/G/Gandi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GandiXs>`
- `<$GandiSm>`
- `<$GandiMd>`
- `<$GandiLg>`





## Gandi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gandi
include('simpleicons/G/Gandi')

' renders the element
Gandi('Gandi', 'Gandi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gandi
include('simpleicons/G/Gandi')

' renders the element
Gandi('Gandi', 'Gandi', 'an optional tech label', 'an optional description')
@enduml
```

