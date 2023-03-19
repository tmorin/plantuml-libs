# ScaleBalanced


```text
fontawesome-6/Solid/ScaleBalanced
```

```text
include('fontawesome-6/Solid/ScaleBalanced')
```



| Illustration | ScaleBalanced |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ScaleBalanced.png) | ![illustration for ScaleBalanced](../../fontawesome-6/Solid/ScaleBalanced.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScaleBalancedXs>`
- `<$ScaleBalancedSm>`
- `<$ScaleBalancedMd>`
- `<$ScaleBalancedLg>`





## ScaleBalanced

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ScaleBalanced
include('fontawesome-6/Solid/ScaleBalanced')

' renders the element
ScaleBalanced('ScaleBalanced', 'Scale Balanced', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScaleBalanced
include('fontawesome-6/Solid/ScaleBalanced')

' renders the element
ScaleBalanced('ScaleBalanced', 'Scale Balanced', 'an optional tech label', 'an optional description')
@enduml
```

