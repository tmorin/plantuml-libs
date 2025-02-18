# Yaml


```text
simpleicons-14/Y/Yaml
```

```text
include('simpleicons-14/Y/Yaml')
```



| Illustration | Yaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yaml.png) | ![illustration for Yaml](../../simpleicons-14/Y/Yaml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YamlXs>`
- `<$YamlSm>`
- `<$YamlMd>`
- `<$YamlLg>`





## Yaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yaml
include('simpleicons-14/Y/Yaml')

' renders the element
Yaml('Yaml', 'Yaml', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yaml
include('simpleicons-14/Y/Yaml')

' renders the element
Yaml('Yaml', 'Yaml', 'an optional tech label', 'an optional description')
@enduml
```

