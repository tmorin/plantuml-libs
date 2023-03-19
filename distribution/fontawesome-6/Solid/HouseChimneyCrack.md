# HouseChimneyCrack


```text
fontawesome-6/Solid/HouseChimneyCrack
```

```text
include('fontawesome-6/Solid/HouseChimneyCrack')
```



| Illustration | HouseChimneyCrack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseChimneyCrack.png) | ![illustration for HouseChimneyCrack](../../fontawesome-6/Solid/HouseChimneyCrack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseChimneyCrackXs>`
- `<$HouseChimneyCrackSm>`
- `<$HouseChimneyCrackMd>`
- `<$HouseChimneyCrackLg>`





## HouseChimneyCrack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseChimneyCrack
include('fontawesome-6/Solid/HouseChimneyCrack')

' renders the element
HouseChimneyCrack('HouseChimneyCrack', 'House Chimney Crack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseChimneyCrack
include('fontawesome-6/Solid/HouseChimneyCrack')

' renders the element
HouseChimneyCrack('HouseChimneyCrack', 'House Chimney Crack', 'an optional tech label', 'an optional description')
@enduml
```

