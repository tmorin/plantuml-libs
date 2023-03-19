# FlorinSign


```text
fontawesome-6/Solid/FlorinSign
```

```text
include('fontawesome-6/Solid/FlorinSign')
```



| Illustration | FlorinSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FlorinSign.png) | ![illustration for FlorinSign](../../fontawesome-6/Solid/FlorinSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlorinSignXs>`
- `<$FlorinSignSm>`
- `<$FlorinSignMd>`
- `<$FlorinSignLg>`





## FlorinSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FlorinSign
include('fontawesome-6/Solid/FlorinSign')

' renders the element
FlorinSign('FlorinSign', 'Florin Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlorinSign
include('fontawesome-6/Solid/FlorinSign')

' renders the element
FlorinSign('FlorinSign', 'Florin Sign', 'an optional tech label', 'an optional description')
@enduml
```

