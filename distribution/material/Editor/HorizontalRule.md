# HorizontalRule


```text
material/Editor/HorizontalRule
```

```text
include('material/Editor/HorizontalRule')
```



| Illustration | HorizontalRule |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/HorizontalRule.png) | ![illustration for HorizontalRule](../../material/Editor/HorizontalRule.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HorizontalRuleXs>`
- `<$HorizontalRuleSm>`
- `<$HorizontalRuleMd>`
- `<$HorizontalRuleLg>`





## HorizontalRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HorizontalRule
include('material/Editor/HorizontalRule')

' renders the element
HorizontalRule('HorizontalRule', 'Horizontal Rule', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HorizontalRule
include('material/Editor/HorizontalRule')

' renders the element
HorizontalRule('HorizontalRule', 'Horizontal Rule', 'an optional tech label', 'an optional description')
@enduml
```

