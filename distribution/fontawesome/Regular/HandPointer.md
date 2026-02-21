# HandPointer


```text
fontawesome/Regular/HandPointer
```

```text
include('fontawesome/Regular/HandPointer')
```



| Illustration | HandPointer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandPointer.png) | ![illustration for HandPointer](../../fontawesome/Regular/HandPointer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPointerXs>`
- `<$HandPointerSm>`
- `<$HandPointerMd>`
- `<$HandPointerLg>`





## HandPointer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPointer
include('fontawesome/Regular/HandPointer')

' renders the element
HandPointer('HandPointer', 'Hand Pointer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandPointer
include('fontawesome/Regular/HandPointer')

' renders the element
HandPointer('HandPointer', 'Hand Pointer', 'an optional tech label', 'an optional description')
@enduml
```

