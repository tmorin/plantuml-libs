# Americanairlines


```text
simpleicons-14/A/Americanairlines
```

```text
include('simpleicons-14/A/Americanairlines')
```



| Illustration | Americanairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Americanairlines.png) | ![illustration for Americanairlines](../../simpleicons-14/A/Americanairlines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmericanairlinesXs>`
- `<$AmericanairlinesSm>`
- `<$AmericanairlinesMd>`
- `<$AmericanairlinesLg>`





## Americanairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Americanairlines
include('simpleicons-14/A/Americanairlines')

' renders the element
Americanairlines('Americanairlines', 'Americanairlines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Americanairlines
include('simpleicons-14/A/Americanairlines')

' renders the element
Americanairlines('Americanairlines', 'Americanairlines', 'an optional tech label', 'an optional description')
@enduml
```

