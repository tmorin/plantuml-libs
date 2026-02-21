# Quarto


```text
simpleicons-14/Q/Quarto
```

```text
include('simpleicons-14/Q/Quarto')
```



| Illustration | Quarto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quarto.png) | ![illustration for Quarto](../../simpleicons-14/Q/Quarto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuartoXs>`
- `<$QuartoSm>`
- `<$QuartoMd>`
- `<$QuartoLg>`





## Quarto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quarto
include('simpleicons-14/Q/Quarto')

' renders the element
Quarto('Quarto', 'Quarto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quarto
include('simpleicons-14/Q/Quarto')

' renders the element
Quarto('Quarto', 'Quarto', 'an optional tech label', 'an optional description')
@enduml
```

