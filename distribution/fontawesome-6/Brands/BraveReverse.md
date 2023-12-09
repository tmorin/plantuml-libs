# BraveReverse


```text
fontawesome-6/Brands/BraveReverse
```

```text
include('fontawesome-6/Brands/BraveReverse')
```



| Illustration | BraveReverse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/BraveReverse.png) | ![illustration for BraveReverse](../../fontawesome-6/Brands/BraveReverse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BraveReverseXs>`
- `<$BraveReverseSm>`
- `<$BraveReverseMd>`
- `<$BraveReverseLg>`





## BraveReverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BraveReverse
include('fontawesome-6/Brands/BraveReverse')

' renders the element
BraveReverse('BraveReverse', 'Brave Reverse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BraveReverse
include('fontawesome-6/Brands/BraveReverse')

' renders the element
BraveReverse('BraveReverse', 'Brave Reverse', 'an optional tech label', 'an optional description')
@enduml
```

