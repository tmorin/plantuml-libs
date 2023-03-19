# Figma


```text
fontawesome-6/Brands/Figma
```

```text
include('fontawesome-6/Brands/Figma')
```



| Illustration | Figma |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Figma.png) | ![illustration for Figma](../../fontawesome-6/Brands/Figma.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FigmaXs>`
- `<$FigmaSm>`
- `<$FigmaMd>`
- `<$FigmaLg>`





## Figma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Figma
include('fontawesome-6/Brands/Figma')

' renders the element
Figma('Figma', 'Figma', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Figma
include('fontawesome-6/Brands/Figma')

' renders the element
Figma('Figma', 'Figma', 'an optional tech label', 'an optional description')
@enduml
```

