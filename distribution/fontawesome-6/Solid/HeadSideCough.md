# HeadSideCough


```text
fontawesome-6/Solid/HeadSideCough
```

```text
include('fontawesome-6/Solid/HeadSideCough')
```



| Illustration | HeadSideCough |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeadSideCough.png) | ![illustration for HeadSideCough](../../fontawesome-6/Solid/HeadSideCough.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeadSideCough
include('fontawesome-6/Solid/HeadSideCough')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeadSideCough
include('fontawesome-6/Solid/HeadSideCough')

' renders the element
HeadSideCough('HeadSideCough', 'Head Side Cough', 'an optional tech label', 'an optional description')
@enduml
```

