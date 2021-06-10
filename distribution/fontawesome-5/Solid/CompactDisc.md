# CompactDisc


```text
fontawesome-5/Solid/CompactDisc
```

```text
include('fontawesome-5/Solid/CompactDisc')
```



| Illustration | CompactDisc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CompactDisc.png) | ![illustration for CompactDisc](../../fontawesome-5/Solid/CompactDisc.Local.png) |




## CompactDisc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CompactDisc
include('fontawesome-5/Solid/CompactDisc')

' renders the element
CompactDisc('CompactDisc', 'Compact Disc', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CompactDisc
include('fontawesome-5/Solid/CompactDisc')

' renders the element
CompactDisc('CompactDisc', 'Compact Disc', 'an optional tech label')
@enduml
```

