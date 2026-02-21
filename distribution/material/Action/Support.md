# Support


```text
material/Action/Support
```

```text
include('material/Action/Support')
```



| Illustration | Support |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Support.png) | ![illustration for Support](../../material/Action/Support.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupportXs>`
- `<$SupportSm>`
- `<$SupportMd>`
- `<$SupportLg>`





## Support

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Support
include('material/Action/Support')

' renders the element
Support('Support', 'Support', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Support
include('material/Action/Support')

' renders the element
Support('Support', 'Support', 'an optional tech label', 'an optional description')
@enduml
```

