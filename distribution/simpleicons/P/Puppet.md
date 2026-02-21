# Puppet


```text
simpleicons/P/Puppet
```

```text
include('simpleicons/P/Puppet')
```



| Illustration | Puppet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Puppet.png) | ![illustration for Puppet](../../simpleicons/P/Puppet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PuppetXs>`
- `<$PuppetSm>`
- `<$PuppetMd>`
- `<$PuppetLg>`





## Puppet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Puppet
include('simpleicons/P/Puppet')

' renders the element
Puppet('Puppet', 'Puppet', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Puppet
include('simpleicons/P/Puppet')

' renders the element
Puppet('Puppet', 'Puppet', 'an optional tech label', 'an optional description')
@enduml
```

