# AlignJustify


```text
fontawesome-5/Solid/AlignJustify
```

```text
include('fontawesome-5/Solid/AlignJustify')
```



| Illustration | AlignJustify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AlignJustify.png) | ![illustration for AlignJustify](../../fontawesome-5/Solid/AlignJustify.Local.png) |




## AlignJustify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AlignJustify
include('fontawesome-5/Solid/AlignJustify')

' renders the element
AlignJustify('AlignJustify', 'Align Justify', 'an optional tech label')
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

' loads the Item which embeds the element AlignJustify
include('fontawesome-5/Solid/AlignJustify')

' renders the element
AlignJustify('AlignJustify', 'Align Justify', 'an optional tech label')
@enduml
```

