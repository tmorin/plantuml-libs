# Perl


```text
simpleicons-14/P/Perl
```

```text
include('simpleicons-14/P/Perl')
```



| Illustration | Perl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Perl.png) | ![illustration for Perl](../../simpleicons-14/P/Perl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PerlXs>`
- `<$PerlSm>`
- `<$PerlMd>`
- `<$PerlLg>`





## Perl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Perl
include('simpleicons-14/P/Perl')

' renders the element
Perl('Perl', 'Perl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Perl
include('simpleicons-14/P/Perl')

' renders the element
Perl('Perl', 'Perl', 'an optional tech label', 'an optional description')
@enduml
```

