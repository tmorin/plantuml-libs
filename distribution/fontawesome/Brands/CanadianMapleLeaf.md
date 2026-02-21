# CanadianMapleLeaf


```text
fontawesome/Brands/CanadianMapleLeaf
```

```text
include('fontawesome/Brands/CanadianMapleLeaf')
```



| Illustration | CanadianMapleLeaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CanadianMapleLeaf.png) | ![illustration for CanadianMapleLeaf](../../fontawesome/Brands/CanadianMapleLeaf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CanadianMapleLeafXs>`
- `<$CanadianMapleLeafSm>`
- `<$CanadianMapleLeafMd>`
- `<$CanadianMapleLeafLg>`





## CanadianMapleLeaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CanadianMapleLeaf
include('fontawesome/Brands/CanadianMapleLeaf')

' renders the element
CanadianMapleLeaf('CanadianMapleLeaf', 'Canadian Maple Leaf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CanadianMapleLeaf
include('fontawesome/Brands/CanadianMapleLeaf')

' renders the element
CanadianMapleLeaf('CanadianMapleLeaf', 'Canadian Maple Leaf', 'an optional tech label', 'an optional description')
@enduml
```

