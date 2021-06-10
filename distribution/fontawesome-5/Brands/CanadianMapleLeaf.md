# CanadianMapleLeaf


```text
fontawesome-5/Brands/CanadianMapleLeaf
```

```text
include('fontawesome-5/Brands/CanadianMapleLeaf')
```



| Illustration | CanadianMapleLeaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CanadianMapleLeaf.png) | ![illustration for CanadianMapleLeaf](../../fontawesome-5/Brands/CanadianMapleLeaf.Local.png) |




## CanadianMapleLeaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CanadianMapleLeaf
include('fontawesome-5/Brands/CanadianMapleLeaf')

' renders the element
CanadianMapleLeaf('CanadianMapleLeaf', 'Canadian Maple Leaf', 'an optional tech label')
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

' loads the Item which embeds the element CanadianMapleLeaf
include('fontawesome-5/Brands/CanadianMapleLeaf')

' renders the element
CanadianMapleLeaf('CanadianMapleLeaf', 'Canadian Maple Leaf', 'an optional tech label')
@enduml
```

