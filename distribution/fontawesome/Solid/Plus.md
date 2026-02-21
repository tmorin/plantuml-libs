# Plus


```text
fontawesome/Solid/Plus
```

```text
include('fontawesome/Solid/Plus')
```



| Illustration | Plus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Plus.png) | ![illustration for Plus](../../fontawesome/Solid/Plus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlusXs>`
- `<$PlusSm>`
- `<$PlusMd>`
- `<$PlusLg>`





## Plus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Plus
include('fontawesome/Solid/Plus')

' renders the element
Plus('Plus', 'Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plus
include('fontawesome/Solid/Plus')

' renders the element
Plus('Plus', 'Plus', 'an optional tech label', 'an optional description')
@enduml
```

