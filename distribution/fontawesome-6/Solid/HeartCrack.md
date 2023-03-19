# HeartCrack


```text
fontawesome-6/Solid/HeartCrack
```

```text
include('fontawesome-6/Solid/HeartCrack')
```



| Illustration | HeartCrack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartCrack.png) | ![illustration for HeartCrack](../../fontawesome-6/Solid/HeartCrack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartCrackXs>`
- `<$HeartCrackSm>`
- `<$HeartCrackMd>`
- `<$HeartCrackLg>`





## HeartCrack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartCrack
include('fontawesome-6/Solid/HeartCrack')

' renders the element
HeartCrack('HeartCrack', 'Heart Crack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartCrack
include('fontawesome-6/Solid/HeartCrack')

' renders the element
HeartCrack('HeartCrack', 'Heart Crack', 'an optional tech label', 'an optional description')
@enduml
```

