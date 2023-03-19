# Copyright


```text
material-4/Action/Copyright
```

```text
include('material-4/Action/Copyright')
```



| Illustration | Copyright |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Copyright.png) | ![illustration for Copyright](../../material-4/Action/Copyright.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CopyrightXs>`
- `<$CopyrightSm>`
- `<$CopyrightMd>`
- `<$CopyrightLg>`





## Copyright

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Copyright
include('material-4/Action/Copyright')

' renders the element
Copyright('Copyright', 'Copyright', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Copyright
include('material-4/Action/Copyright')

' renders the element
Copyright('Copyright', 'Copyright', 'an optional tech label', 'an optional description')
@enduml
```

