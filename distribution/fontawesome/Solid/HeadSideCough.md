# HeadSideCough


```text
fontawesome/Solid/HeadSideCough
```

```text
include('fontawesome/Solid/HeadSideCough')
```



| Illustration | HeadSideCough |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HeadSideCough.png) | ![illustration for HeadSideCough](../../fontawesome/Solid/HeadSideCough.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadSideCoughXs>`
- `<$HeadSideCoughSm>`
- `<$HeadSideCoughMd>`
- `<$HeadSideCoughLg>`





## HeadSideCough

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeadSideCough
include('fontawesome/Solid/HeadSideCough')

' renders the element
HeadSideCough('HeadSideCough', 'Head Side Cough', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeadSideCough
include('fontawesome/Solid/HeadSideCough')

' renders the element
HeadSideCough('HeadSideCough', 'Head Side Cough', 'an optional tech label', 'an optional description')
@enduml
```

