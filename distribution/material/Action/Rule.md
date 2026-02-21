# Rule


```text
material/Action/Rule
```

```text
include('material/Action/Rule')
```



| Illustration | Rule |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Rule.png) | ![illustration for Rule](../../material/Action/Rule.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RuleXs>`
- `<$RuleSm>`
- `<$RuleMd>`
- `<$RuleLg>`





## Rule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Rule
include('material/Action/Rule')

' renders the element
Rule('Rule', 'Rule', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rule
include('material/Action/Rule')

' renders the element
Rule('Rule', 'Rule', 'an optional tech label', 'an optional description')
@enduml
```

