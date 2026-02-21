# CreativeCommonsZero


```text
fontawesome/Brands/CreativeCommonsZero
```

```text
include('fontawesome/Brands/CreativeCommonsZero')
```



| Illustration | CreativeCommonsZero |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsZero.png) | ![illustration for CreativeCommonsZero](../../fontawesome/Brands/CreativeCommonsZero.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsZeroXs>`
- `<$CreativeCommonsZeroSm>`
- `<$CreativeCommonsZeroMd>`
- `<$CreativeCommonsZeroLg>`





## CreativeCommonsZero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsZero
include('fontawesome/Brands/CreativeCommonsZero')

' renders the element
CreativeCommonsZero('CreativeCommonsZero', 'Creative Commons Zero', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsZero
include('fontawesome/Brands/CreativeCommonsZero')

' renders the element
CreativeCommonsZero('CreativeCommonsZero', 'Creative Commons Zero', 'an optional tech label', 'an optional description')
@enduml
```

