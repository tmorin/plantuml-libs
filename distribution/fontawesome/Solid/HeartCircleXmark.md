# HeartCircleXmark


```text
fontawesome/Solid/HeartCircleXmark
```

```text
include('fontawesome/Solid/HeartCircleXmark')
```



| Illustration | HeartCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HeartCircleXmark.png) | ![illustration for HeartCircleXmark](../../fontawesome/Solid/HeartCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartCircleXmarkXs>`
- `<$HeartCircleXmarkSm>`
- `<$HeartCircleXmarkMd>`
- `<$HeartCircleXmarkLg>`





## HeartCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeartCircleXmark
include('fontawesome/Solid/HeartCircleXmark')

' renders the element
HeartCircleXmark('HeartCircleXmark', 'Heart Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartCircleXmark
include('fontawesome/Solid/HeartCircleXmark')

' renders the element
HeartCircleXmark('HeartCircleXmark', 'Heart Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

