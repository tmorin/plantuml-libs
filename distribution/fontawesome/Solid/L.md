# L


```text
fontawesome/Solid/L
```

```text
include('fontawesome/Solid/L')
```



| Illustration | L |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/L.png) | ![illustration for L](../../fontawesome/Solid/L.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LXs>`
- `<$LSm>`
- `<$LMd>`
- `<$LLg>`





## L

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element L
include('fontawesome/Solid/L')

' renders the element
L('L', 'L', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element L
include('fontawesome/Solid/L')

' renders the element
L('L', 'L', 'an optional tech label', 'an optional description')
@enduml
```

