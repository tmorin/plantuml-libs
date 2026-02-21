# CallSplit


```text
material/Communication/CallSplit
```

```text
include('material/Communication/CallSplit')
```



| Illustration | CallSplit |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/CallSplit.png) | ![illustration for CallSplit](../../material/Communication/CallSplit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CallSplitXs>`
- `<$CallSplitSm>`
- `<$CallSplitMd>`
- `<$CallSplitLg>`





## CallSplit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CallSplit
include('material/Communication/CallSplit')

' renders the element
CallSplit('CallSplit', 'Call Split', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element CallSplit
include('material/Communication/CallSplit')

' renders the element
CallSplit('CallSplit', 'Call Split', 'an optional tech label', 'an optional description')
@enduml
```

