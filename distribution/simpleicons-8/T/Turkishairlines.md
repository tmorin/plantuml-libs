# Turkishairlines


```text
simpleicons-8/T/Turkishairlines
```

```text
include('simpleicons-8/T/Turkishairlines')
```



| Illustration | Turkishairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Turkishairlines.png) | ![illustration for Turkishairlines](../../simpleicons-8/T/Turkishairlines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurkishairlinesXs>`
- `<$TurkishairlinesSm>`
- `<$TurkishairlinesMd>`
- `<$TurkishairlinesLg>`





## Turkishairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Turkishairlines
include('simpleicons-8/T/Turkishairlines')

' renders the element
Turkishairlines('Turkishairlines', 'Turkishairlines', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Turkishairlines
include('simpleicons-8/T/Turkishairlines')

' renders the element
Turkishairlines('Turkishairlines', 'Turkishairlines', 'an optional tech label', 'an optional description')
@enduml
```

