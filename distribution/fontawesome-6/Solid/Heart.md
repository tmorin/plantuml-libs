# Heart


```text
fontawesome-6/Solid/Heart
```

```text
include('fontawesome-6/Solid/Heart')
```



| Illustration | Heart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Heart.png) | ![illustration for Heart](../../fontawesome-6/Solid/Heart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartXs>`
- `<$HeartSm>`
- `<$HeartMd>`
- `<$HeartLg>`





## Heart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Heart
include('fontawesome-6/Solid/Heart')

' renders the element
Heart('Heart', 'Heart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Heart
include('fontawesome-6/Solid/Heart')

' renders the element
Heart('Heart', 'Heart', 'an optional tech label', 'an optional description')
@enduml
```

