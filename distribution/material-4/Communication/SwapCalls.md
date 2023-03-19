# SwapCalls


```text
material-4/Communication/SwapCalls
```

```text
include('material-4/Communication/SwapCalls')
```



| Illustration | SwapCalls |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/SwapCalls.png) | ![illustration for SwapCalls](../../material-4/Communication/SwapCalls.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwapCallsXs>`
- `<$SwapCallsSm>`
- `<$SwapCallsMd>`
- `<$SwapCallsLg>`





## SwapCalls

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwapCalls
include('material-4/Communication/SwapCalls')

' renders the element
SwapCalls('SwapCalls', 'Swap Calls', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SwapCalls
include('material-4/Communication/SwapCalls')

' renders the element
SwapCalls('SwapCalls', 'Swap Calls', 'an optional tech label', 'an optional description')
@enduml
```

